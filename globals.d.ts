// types.d.ts or globals.d.ts
declare module 'aos' {
  export function init(options?: any): void;
  export function refresh(): void;
  export function refreshHard(): void;
  const aos: {
    init: (options?: any) => void;
    refresh: () => void;
    refreshHard: () => void;
  };
  export default aos;
}