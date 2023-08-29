export function resolve(specifier: string, context: any, nextResolve: any) {
  if (specifier.endsWith('next/dist/bin/next')) {
    return {
      url: specifier,
      shortCircuit: true,
      format: 'commonjs',
    }
  }

  return nextResolve(specifier, context)
}
