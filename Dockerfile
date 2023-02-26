FROM node:16-alpine as build

WORKDIR /build
COPY ./ /build
COPY README.md /build/src/index.md

RUN yarn --production=true --frozen-lockfile
RUN yarn build
RUN ls -la /build/build


FROM ghcr.io/umputun/reproxy
COPY --from=build /build/build /srv/site
EXPOSE 8080
USER app
ENTRYPOINT ["/srv/reproxy", "--assets.location=/srv/site"]
# docker run --rm -d -p 8088:8080 -p 8081:8081 --name translate-ui rashile/translate-ui:latest