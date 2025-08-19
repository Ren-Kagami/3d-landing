FROM node:lts as dependencies
WORKDIR /crm_frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /crm_frontend
COPY . .
COPY --from=dependencies /crm_frontend/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /crm_frontend
ENV NODE_ENV production

COPY --from=builder /crm_frontend/public ./public
COPY --from=builder /crm_frontend/package.json ./package.json
COPY --from=builder /crm_frontend/.next ./.next
COPY --from=builder /crm_frontend/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]