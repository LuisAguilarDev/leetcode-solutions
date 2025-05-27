export function accountMerge(accounts: string[][]): string[][] {
  if (!accounts) return [];
  if (accounts.length === 1) return accounts;

  const dict: Record<string, Set<string>[]> = {};

  for (const account of accounts) {
    const name = account[0];
    if (!dict[name]) {
      dict[name] = [];
    }

    // Ver si existe una cuenta con ese nombre con algun correo
    const currentAcc = new Set(account.slice(1));
    const foundAccount: number[] = [];

    dict[name].forEach((acc, index) => {
      const intersection = setIntersection(acc, currentAcc);
      if (intersection.size > 0) {
        foundAccount.push(index);
      }
    });

    if (foundAccount.length === 0) {
      // Crear
      dict[name].push(currentAcc);
    } else if (foundAccount.length === 1) {
      // Agregar a la existente
      dict[name][foundAccount[0]] = setUnion(
        dict[name][foundAccount[0]],
        currentAcc,
      );
    } else {
      // Combinar todas las cuentas encontradas
      const mergedSet = new Set<string>();

      for (const email of currentAcc) {
        mergedSet.add(email);
      }

      for (const index of foundAccount) {
        for (const email of dict[name][index]) {
          mergedSet.add(email);
        }
      }

      for (let i = foundAccount.length - 1; i >= 0; i--) {
        dict[name].splice(foundAccount[i], 1);
      }

      dict[name].push(mergedSet);
    }
  }

  const merged: string[][] = [];
  Object.keys(dict).forEach((name) => {
    dict[name].forEach((acc) => {
      const mails = Array.from(acc).sort(compareEmails);
      merged.push([name, ...mails]);
    });
  });

  return merged;
}

function setIntersection(set1: Set<string>, set2: Set<string>): Set<string> {
  const result = new Set<string>();
  for (const mail of set2) {
    if (set1.has(mail)) {
      result.add(mail);
    }
  }
  return result;
}

function setUnion(set1: Set<string>, set2: Set<string>): Set<string> {
  const result = new Set<string>(set1);
  for (const mail of set2) {
    result.add(mail);
  }
  return result;
}

function charCategory(c: string): number {
  if (c >= '0' && c <= '9') return 0;
  if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) return 2;
  return 1;
}

function compareEmails(a: string, b: string): number {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const ca = a[i],
      cb = b[i];
    if (ca === cb) continue;

    const catA = charCategory(ca);
    const catB = charCategory(cb);
    if (catA !== catB) {
      return catA - catB;
    }
    return ca.localeCompare(cb);
  }
  return a.length - b.length;
}

export function accountMergeUnionFind(accounts: string[][]): string[][] {
  const emailToName: Record<string, string> = {};
  const uf = new UnionFind();

  // Build email to name mapping and union emails from same account
  for (const account of accounts) {
    const name = account[0];
    const firstEmail = account[1];

    for (let i = 1; i < account.length; i++) {
      emailToName[account[i]] = name;
      uf.add(account[i]);
      if (i > 1) {
        uf.union(firstEmail, account[i]);
      }
    }
  }

  // Group emails by their root parent
  const groups: Record<string, string[]> = {};
  for (const email in emailToName) {
    const root = uf.find(email);
    if (!groups[root]) {
      groups[root] = [];
    }
    groups[root].push(email);
  }

  // Build result
  const result: string[][] = [];
  for (const root in groups) {
    const name = emailToName[root];
    const emails = groups[root].sort(compareEmails);
    result.push([name, ...emails]);
  }

  return result;
}

// Union-Find data structure
class UnionFind {
  private parent: Record<string, string> = {};

  add(x: string): void {
    if (!(x in this.parent)) {
      this.parent[x] = x;
    }
  }

  find(x: string): string {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x: string, y: string): void {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}
