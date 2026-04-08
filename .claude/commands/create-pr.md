Create a pull request for the current branch following the project PR template.

## Steps

1. **Safety check — refuse to run on main/master**

   Run `git branch --show-current` to get the current branch name.
   If the branch is `main` or `master`, stop immediately and tell the user:
   > "You are on the `<branch>` branch. Please switch to a feature branch before creating a PR."

2. **Gather context**

   Run the following in parallel:
   - `git status` — identify staged, unstaged, and untracked files
   - `git diff HEAD` — see all uncommitted changes
   - `git log master..HEAD --oneline` — list commits already on this branch vs master
   - `git diff master...HEAD` — full diff of everything this branch changes vs master

3. **Handle uncommitted changes**

   If there are uncommitted changes (staged or unstaged):
   - Show the user a summary of the uncommitted changes
   - Ask: "You have uncommitted changes. Would you like me to commit them before creating the PR? If yes, describe what they are or I'll infer a commit message."
   - If the user confirms: stage relevant files and commit with a conventional commit message (feat/fix/chore/docs/refactor as appropriate). Never use `git add -A` — add specific files by name.
   - If the user declines: proceed without committing (only already-pushed or committed changes will be in the PR).

4. **Push branch to remote**

   Check if the current branch has a remote tracking branch (`git status -sb`).
   - If not yet pushed: run `git push -u origin <branch>`
   - If already tracking: run `git push`

5. **Draft PR content from the template**

   Read `.github/pull_request_template.md` to get the template structure.

   Analyze ALL commits on this branch (`git log master..HEAD` + `git diff master...HEAD`) and fill in every section of the template:

   - **Summary**: 1-3 bullet points describing what this PR does (derived from commits and diff)
   - **Type of change**: check the appropriate box(es) based on the changes
   - **Related issue**: leave blank unless the user mentioned an issue number
   - **How to test**: concrete steps based on what changed (e.g. "run npm run dev and visit /")
   - **Screenshots**: note "See PR description" if it's a UI change, otherwise omit
   - **Checklist**: leave all boxes unchecked for the author to verify

6. **Create the PR**

   Use `gh pr create` with:
   - `--base master`
   - A concise title (under 70 chars) derived from the branch name and commits
   - The filled-in template body passed via heredoc

   Example:
   ```bash
   gh pr create --base master --title "<title>" --body "$(cat <<'EOF'
   <filled template>
   EOF
   )"
   ```

7. **Return the PR URL** so the user can open it immediately.

## Rules

- Never commit, push, or create a PR on `main` or `master`
- Never use `git add -A` or `git add .` — always add files explicitly by name
- Never skip hooks (`--no-verify`)
- Never force-push unless the user explicitly asks
- If `gh` is not authenticated, tell the user to run `gh auth login` first
