const requestCounts = new Map<string, number>();
const TIME_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10;

/**
 * Implements a rate-limiting mechanism to restrict the number of requests
 * from a single IP address within a specified time window.
 *
 * @param req - The incoming HTTP request object.
 * @returns A boolean indicating whether the request should be rate-limited.
 *          - `true`: The request exceeds the allowed rate limit.
 *          - `false`: The request is within the allowed rate limit.
 *
 * @remarks
 * - The function uses the `x-forwarded-for` or `remote-addr` headers to identify the client's IP address.
 * - If the IP address is not found in the headers, it defaults to `'unknown'`.
 * - The rate limit is enforced using a combination of a request count and a time window.
*/
export default function rateLimit(req: Request): boolean {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || 'unknown';
  const now = Date.now();

  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, 1);
    setTimeout(() => requestCounts.delete(ip), TIME_WINDOW);
    return false;
  }

  const count = requestCounts.get(ip)!;
  if (count >= MAX_REQUESTS) {
    return true;
  }

  requestCounts.set(ip, count + 1);
  return false;
}