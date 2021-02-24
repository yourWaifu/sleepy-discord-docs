# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

Install doxygen from their website or your package manager.
Download doxybook2 and place ``doxybook2.exe`` or ``doxybook2`` in this folder.

```console
git clone https://github.com/yourWaifu/sleepy-discord.git
cp Doxyfile sleepy-discord/
cd sleepy-discord
doxygen
mkdir ../xml
mv xml/* ../xml
cd ..
mkdir docs/reference
.\doxybook2.exe --input .\xml --output .\docs\reference --config .\doxybook.config.json --templates templates\
npm install
yarn install
npx tsc --p reference-generator-tsconfig.json
npx tsc
```

If you can't run the doxygen command but have Doxygen installed, you can use the GUI and open the ``doxyfile`` file in the ``sleepy-discord`` directory.
Also for linux user replace the ``\`` with ``/``. For Windows users, replace path separators, like ``/``, with ``\``, but leave the url alone and unedited.

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
