# Deploy to Staging

This skill deploys the application to staging by running tests, building the production bundle, and pushing to the staging area.

## When to use

Invoke this skill when:
- The user asks to deploy the application
- The user types `/deploy`
- The user wants to push changes to staging

## Steps

1. **Run tests first**
   - Check if a test script exists in package.json
   - If tests exist, run `npm test` or `npm run test`
   - If tests fail, stop deployment and report the failures
   - If no test script exists, warn the user and ask if they want to proceed

2. **Build the production bundle**
   - Run `npm run build` to create the optimized production build
   - Verify the build completed successfully
   - Check that the `dist/` directory was created

3. **Push to staging**
   - Check the current git branch
   - Ensure all changes are committed (warn if there are uncommitted changes)
   - Push the current branch to the staging remote/branch
   - Default staging setup: push to `staging` branch or remote
   - If no staging configuration exists, ask the user for their staging setup (remote name, branch name, or deployment command)

## Output

Report each step clearly:
- "✓ Tests passed"
- "✓ Production bundle built successfully"
- "✓ Pushed to staging"

If any step fails, stop and report the error clearly.

## Notes

- This skill does NOT push to production
- Always run tests before building (if they exist)
- Confirm the build succeeded before pushing
- If the staging deployment setup is unclear, ask the user how they deploy to staging (e.g., git push, deployment service, CI/CD pipeline)
