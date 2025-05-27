import { accountMerge, accountMergeUnionFind } from './accountsMerge';

describe('721. Accounts Merge', () => {
  const implementations = [
    { name: 'Original approach', fn: accountMerge },
    { name: 'Union-Find approach', fn: accountMergeUnionFind },
  ];

  const normalizeResult = (accounts: string[][]) => {
    return accounts
      .map((account) => [account[0], ...account.slice(1).sort()]) // Sort emails within each account
      .sort((a, b) => {
        // Sort by name first, then by first email
        if (a[0] !== b[0]) return a[0].localeCompare(b[0]);
        return a[1]?.localeCompare(b[1] || '') || 0;
      });
  };

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test('#1 Should return an empty array if no accounts are provided', () => {
        expect(fn([])).toEqual([]);
      });

      test('#2 Should return the same account if only one is provided', () => {
        expect(fn([['Luis', 'test@test.com']])).toEqual([
          ['Luis', 'test@test.com'],
        ]);
      });

      test('#3 Should return the original accounts if there are no common emails', () => {
        expect(
          fn([
            ['Luis', 'luis2@test.com', 'luis@test.com'],
            ['Pedro', 'pedro2@test.com', 'pedro3@test.com'],
          ]),
        ).toEqual([
          ['Luis', 'luis2@test.com', 'luis@test.com'],
          ['Pedro', 'pedro2@test.com', 'pedro3@test.com'],
        ]);
      });

      test('#4 Should merge accounts that share at least one common email', () => {
        const input = [
          ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
          ['John', 'johnsmith@mail.com', 'john00@mail.com'],
          ['John', 'johnnybravo@mail.com'],
          ['Mary', 'mary@mail.com'],
        ];
        const result = fn(input);
        expect(result.length).toEqual(3);
        const accounts = result.map((account) => ({
          name: account[0],
          emails: account.slice(1).sort(),
        }));
        const mergedJohn = accounts.find(
          (acc) => acc.name === 'John' && acc.emails.length === 3,
        )!;
        expect(mergedJohn).toBeDefined();
        expect(mergedJohn.emails).toEqual([
          'john00@mail.com',
          'john_newyork@mail.com',
          'johnsmith@mail.com',
        ]);

        // Check for separate John account
        const separateJohn = accounts.find(
          (acc) =>
            acc.name === 'John' && acc.emails.includes('johnnybravo@mail.com'),
        )!;
        expect(separateJohn).toBeDefined();
        expect(separateJohn.emails).toEqual(['johnnybravo@mail.com']);

        // Check for Mary account
        const mary = accounts.find((acc) => acc.name === 'Mary')!;
        expect(mary).toBeDefined();
        expect(mary.emails).toEqual(['mary@mail.com']);
      });

      test('#5 Should merge accounts that share at least one common email', () => {
        expect(
          fn([
            ['Pedro', 'Pedro0@m.co', 'Pedro1@m.co'],
            ['Pedro', 'Pedro3@m.co', 'Pedro4@m.co'],
            ['Pedro', 'Pedro4@m.co', 'Pedro5@m.co'],
            ['Pedro', 'Pedro2@m.co', 'Pedro3@m.co'],
            ['Pedro', 'Pedro1@m.co', 'Pedro2@m.co'],
          ]),
        ).toEqual([
          [
            'Pedro',
            'Pedro0@m.co',
            'Pedro1@m.co',
            'Pedro2@m.co',
            'Pedro3@m.co',
            'Pedro4@m.co',
            'Pedro5@m.co',
          ],
        ]);
      });
    });
  });
});
