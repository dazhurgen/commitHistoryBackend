import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from 'octokit';

@Injectable()
export class ReaderService {
  constructor(private configService: ConfigService) {}

  octokit = new Octokit({
    auth: this.configService.get('GITHUB_TOKEN'),
  });

  async getUserBackendBranches() {
    return await this.octokit.request('GET /repos/{owner}/{repo}/branches', {
      owner: 'dazhurgen',
      repo: 'commitHistoryBackend',
    });
  }
  async getBackendCommitsFromBranch(branch) {
    console.log(branch);
    return await this.octokit.request(
      'GET /repos/{owner}/{repo}/commits?sha=' + branch,
      {
        owner: 'dazhurgen',
        repo: 'commitHistoryBackend',
      },
    );
  }
}
