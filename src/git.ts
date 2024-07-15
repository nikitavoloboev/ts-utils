import { $, sleep, type ShellOutput } from "bun"

export async function commitRepoWithDot(gitRepoPath: string, timeout = 30000) {
  try {
    console.log(`Changing directory to: ${gitRepoPath}`)
    process.chdir(gitRepoPath)

    console.log("Pulling latest changes...")
    const pullPromise = $`git pull`
    const pullTimeoutPromise = sleep(timeout)

    const pullResult = (await Promise.race([
      pullPromise,
      pullTimeoutPromise,
    ])) as ShellOutput | undefined

    if (pullResult === undefined) {
      throw new Error(`Git pull timed out after ${timeout}ms`)
    }
    if ("exitCode" in pullResult && pullResult.exitCode !== 0) {
      throw new Error(`Git pull failed: ${pullResult.stderr}`)
    }

    console.log("Adding changes...")
    const addPromise = $`git add .`
    const timeoutPromise = sleep(timeout)

    const addResult = (await Promise.race([addPromise, timeoutPromise])) as
      | ShellOutput
      | undefined

    if (addResult === undefined) {
      throw new Error(`Git add timed out after ${timeout}ms`)
    }
    if ("exitCode" in addResult && addResult.exitCode !== 0) {
      throw new Error(`Git add failed: ${addResult.stderr}`)
    }

    console.log("Committing changes...")
    const commitResult = await $`git commit -m "."`
    if (commitResult.exitCode !== 0) {
      throw new Error(`Git commit failed: ${commitResult.stderr}`)
    }

    console.log("Pushing changes...")
    // const pushResult = await $`git push`
    const pushResult = await $`GIT_SSH_COMMAND="ssh -o BatchMode=yes" git push`
    if (pushResult.exitCode !== 0) {
      throw new Error(`Git push failed: ${pushResult.stderr}`)
    }

    console.log("Changes committed and pushed successfully.")
  } catch (error) {
    console.error("Error in commitRepoWithDot:", error)
    if (error instanceof Error) {
      console.error("Error message:", error.message)
    }
    throw error
  }
}
