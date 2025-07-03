import axios from "axios";
import dotenv from "dotenv";

import { GITHUB_API } from "../constants/github";
import { Commit, ReleaseObject } from "../types/export";

dotenv.config(); /* TODO: Create a `EnvironmentService` class */

/**
 * Represents the GitHub service.
 * This class provides methods for interacting with the [GitHub API](https://docs.github.com/en/rest).
 */
export class GitHubService {
  /**
   * Axios instance for making requests to the GitHub API.
   * Configured with base URL, authorization token, and headers.
   */
  private readonly AxiosWrapper = axios.create({
    baseURL: GITHUB_API,
    headers: {
      Authorization: `token ${process.env.GITHUB_SECRET}` /* TODO: Create a `EnvironmentService` class */,
      Accept: "application/vnd.github+json",
      "User-Agent": "github-release-webhook",
    },
  });

  constructor(
    private repositoryOwner: string = "nocrajs",
    private repositoryName: string = "nocrajs",
  ) {
    this.repositoryOwner = repositoryOwner;
    this.repositoryName = repositoryName;
  }

  /**
   * Retrieves the releases from the GitHub API.
   *
   * This method retrieves the releases from the [GitHub API](https://docs.github.com/en/rest) and returns them as an array of
   * [ReleaseObject](https://docs.github.com/en/rest/releases/releases#list-releases-for-a-repository).
   */
  public async RetrieveReleases(): Promise<Array<ReleaseObject>> {
    /* TODO: Make this function general; `repositoryOwner` and `repositoryName` parameters. */
    return (
      await this.AxiosWrapper.get(
        `/repos/${this.repositoryOwner}/${this.repositoryName}/releases`,
      )
    ).data;
  }

  /**
   * Retrieves the commits between two releases.
   *
   * This method takes the latest and previous release tag names and returns the commits
   * between them. The commits are retrieved from the [GitHub API](https://docs.github.com/en/rest).
   */
  public async RetrieveCommits(
    /** The latest release tag name. */
    latestRelease: ReleaseObject["tag_name"],
    /** The previous release tag name. */
    previousRelease: ReleaseObject["tag_name"],
  ): Promise<Array<Object>> /* TODO: Create a `CommitObject` interface */ {
    /* TODO: Make this function general; `repositoryOwner` and `repositoryName` parameters. */
    return (
      await this.AxiosWrapper.get(
        `/repos/${this.repositoryOwner}/${this.repositoryName}/compare/${previousRelease}...${latestRelease}`,
      )
    ).data.commits;
  }

  /**
   * Retrieves the contributors of a release.
   *
   * This method takes an array of commits and returns the contributors of the
   * release. The contributors are the GitHub usernames of the authors of the
   * commits. The contributors are unique, i.e., if a user has multiple commits in
   * the release, they are only counted once.
   */
  public RetrieveContributors(
    /** The commits of the release. */
    commits: Array<Commit> /* TODO: Create a `CommitObject` interface */,
  ): Array<string> /* TODO: Perhaps make the code more readable */ {
    /* TODO: Make this function general; `repositoryOwner` and `repositoryName` parameters. */
    return [
      ...new Set(
        commits
          .map((c) => c.author?.login)
          .filter((login): login is string => typeof login === "string"),
      ),
    ];
  }
}