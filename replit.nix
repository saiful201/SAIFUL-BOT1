{ pkgs }: {
	deps = [
		pkgs.unzip
  pkgs.python39Packages.pip
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}
