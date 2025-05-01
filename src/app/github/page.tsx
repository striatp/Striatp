import { redirect } from 'next/navigation';

/**
 * Redirects the user to the specified GitHub organization URL.
 * 
 * This function is the default export for the GitHub page and is responsible
 * for performing a client-side redirection to the GitHub organization page.
 * 
 * @function
 * @name DiscordRedirect
 * @returns {VoidFunction} This function does not return anything as it triggers a redirection.
 * 
 * @remarks
 * The `redirect` function from `next/navigation` is used to handle the redirection.
 * Ensure that the URL provided in the `GitHubOrg` variable is correct and accessible.
 * 
 * @example
 * // This function will redirect the user to the RaviumLabs GitHub organization page:
 * GitHubRedirect();
*/
export default function GitHubRedirect(): VoidFunction {
  const GitHubOrg: string = 'https://github.com/RaviumLabs/';
  redirect(GitHubOrg);
}