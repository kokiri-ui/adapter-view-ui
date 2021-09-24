function getComponentName(moduleName: string): string {
  return `PetalsViewUi${moduleName.charAt(0).toUpperCase()}${moduleName.slice(1)}`;
}

export { getComponentName };
