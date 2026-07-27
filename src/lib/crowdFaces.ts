import avatarMan from "@/assets/avatar-man.png";
import avatarWoman from "@/assets/avatar-woman.png";
import avatarM2 from "@/assets/avatar-m2.png";
import avatarM3 from "@/assets/avatar-m3.png";
import avatarW2 from "@/assets/avatar-w2.png";
import avatarW3 from "@/assets/avatar-w3.png";
import avatarW4 from "@/assets/avatar-w4.png";
import avatarW5 from "@/assets/avatar-w5.png";

export const womenFaces = [avatarWoman, avatarW2, avatarW3, avatarW4, avatarW5] as const;

export const menFaces = [avatarMan, avatarM2, avatarM3] as const;

const feminineFirst = new Set(
  [
    "maya",
    "emily",
    "sophia",
    "alyssa",
    "jamie",
    "diana",
    "lia",
    "bia",
    "sara",
    "sarah",
    "mia",
    "bella",
    "ava",
    "zoe",
    "naomi",
    "amelia",
    "maisy",
    "layla",
    "freya",
    "nina",
    "jisoo",
    "paityn",
  ].map((s) => s.toLowerCase()),
);

const masculineFirst = new Set(
  [
    "chris",
    "leo",
    "ethan",
    "alex",
    "jackson",
    "liam",
    "ryan",
    "thiago",
    "caio",
    "rafa",
    "andre",
  ].map((s) => s.toLowerCase()),
);

const nameGender: Record<string, "f" | "m"> = {
  "maya reed": "f",
  "emily clark": "f",
  "emily brooks": "f",
  "sophia carter": "f",
  "sophia bennett": "f",
  "sarah mitchell": "f",
  "sarah moriaty": "f",
  "mia taylor": "f",
  "paityn franci": "f",
  "emily carter": "f",
  "alyssa johnson": "f",
  "jamie collins": "f",
  diana: "f",
  maya: "f",
  emily: "f",
  sophia: "f",
  alyssa: "f",
  "chris parker": "m",
  "leo hart": "m",
  "ethan miller": "m",
  "alex morgan": "m",
  "jackson lee": "m",
  "liam johnson": "m",
  "ryan scott": "m",
  "tyler shaw": "m",
  chris: "m",
  leo: "m",
  ethan: "m",
  alex: "m",
  jackson: "m",
  liam: "m",
  ryan: "m",
  tyler: "m",
};

function genderOf(name: string): "f" | "m" {
  const key = name.trim().toLowerCase();
  if (nameGender[key]) return nameGender[key];
  const first = key.split(/\s+/)[0] ?? key;
  if (feminineFirst.has(first)) return "f";
  if (masculineFirst.has(first)) return "m";
  if (first.endsWith("a") || first.endsWith("y") || first.endsWith("ie")) return "f";
  return "m";
}

export function faceFor(name: string, salt = 0): string {
  const g = genderOf(name);
  const pool = g === "f" ? womenFaces : menFaces;
  let h = salt;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return pool[h % pool.length];
}

export function faceByGender(gender: "f" | "m", index: number): string {
  const pool = gender === "f" ? womenFaces : menFaces;
  return pool[((index % pool.length) + pool.length) % pool.length];
}

export function uniqueFacesFor(names: string[]): string[] {
  const usedF = new Set<number>();
  const usedM = new Set<number>();

  return names.map((name) => {
    const g = genderOf(name);
    const pool = g === "f" ? womenFaces : menFaces;
    const used = g === "f" ? usedF : usedM;

    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    const preferred = h % pool.length;

    for (let k = 0; k < pool.length; k++) {
      const idx = (preferred + k) % pool.length;
      if (!used.has(idx)) {
        used.add(idx);
        return pool[idx];
      }
    }
    return pool[preferred];
  });
}
