import { $ } from "bun"

export async function commitRepoWithDot(gitRepoPath: string) {
  try {
    process.chdir(gitRepoPath)

    await $`git add .`

    await $`git commit -m "."`

    await $`git push`

    console.log("Changes committed and pushed successfully.")
  } catch (error) {
    console.error("Error committing and pushing changes:", error)
  }
}
