FROM node:18.14
COPY ./frontend/ /dataminer/frontend/
WORKDIR /dataminer/frontend/
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run", "dev"]
