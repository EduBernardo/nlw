import { Request, Response, request} from 'express'
import db from '../database/connection';


export default class ConnectionController {
 async index( request: Request, response: Response){
    const totalconnections = await db('connections').count('* as total');

    const { total } = totalconnections[0];

    return response.json({
        total,
    })
 }
 
 
async create( request: Request, response: Response){
    const { user_id } = request.body;

    await db('connections').insert({
        user_id,
    });

    return response.status(201).send();
 }



} 