import { redirect } from 'next/navigation';

/**
 * This is the default export function for the Discord page.
 * It retrieves the Discord invite link from the environment variables
 * and redirects the user to the specified invite link.
 *
 * @throws {Error} Throws an error if the `NEXT_PUBLIC_DISCORD_INVITE` environment variable is not defined.
 *
 * Environment Variables:
 * - `NEXT_PUBLIC_DISCORD_INVITE`: The Discord invite link to redirect users to.
 *
 * @returns {VoidFunction} This function does not return anything as it performs a redirection.
*/
export default function DiscordRedirect(): VoidFunction {
  const DiscordInvite = process.env.NEXT_PUBLIC_DISCORD_INVITE;

  if (!DiscordInvite) {
    throw new Error('Discord invite link is not defined in the environment variables.');
  }

  redirect(DiscordInvite);
}