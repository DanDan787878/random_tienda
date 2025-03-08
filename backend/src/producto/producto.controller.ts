import { Controller, Get, Post, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreateProductoDTO } from './dto/producto.dto';

@Controller('producto')
export class ProductoController {

    @Post('/create')
    createPost(@Res() res) {
        return res.status(HttpStatus.OK).json({
            message: 'producto creado'
        }); 
    }

}

