set -o errexit

yarn install
yarn build
yarn prisma migrate dev