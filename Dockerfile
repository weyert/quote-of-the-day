FROM node:12-alpine as build

COPY . .

ENV NPM_CONFIG_LOGLEVEL warn
RUN yarn install --frozen-lockfile

RUN yarn run build

FROM node:12-alpine

COPY --from=build package.json package.json
COPY --from=build yarn.lock yarn.lock
COPY --from=build .next .next
# COPY --from=build public public

ENV NPM_CONFIG_LOGLEVEL warn
RUN yarn install --production --frozen-lockfile

EXPOSE 3000

CMD yarn start
