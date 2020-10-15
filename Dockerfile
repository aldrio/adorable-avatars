FROM node:12-alpine

WORKDIR /usr/app/avatars

COPY . .

RUN yarn install
RUN yarn build


ENV AVATARS_PORT=8080

EXPOSE 8080

USER node

ENTRYPOINT ["yarn"]
CMD ["start"]
