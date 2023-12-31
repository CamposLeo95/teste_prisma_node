import express from 'express';
import { routes } from './routes/routes';

class App{

  app = express()

  constructor(){
    this.app

    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.app.use(express.json())

  }

  routes(){
    this.app.use(routes)
  }


}

export default new App().app




