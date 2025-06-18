import {
  Controller,
  Body,
  Post,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './DTO/create-producto.dto';

@ApiTags('productos')
@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    const producto = await this.productoService.create(createProductoDto);
    return {
      message: 'Producto created successfully',
      data: producto,
    };
  }

  @Get()
  async findAll() {
    const productos = await this.productoService.findAll();
    return {
      message: 'Productos retrieved successfully',
      data: productos,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const producto = await this.productoService.findOne(+id);
    return {
      message: 'Producto retrieved successfully',
      data: producto,
    };
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductoDto: CreateProductoDto,
  ) {
    const producto = await this.productoService.update(+id, updateProductoDto);
    return {
      message: 'Producto updated successfully',
      data: producto,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productoService.remove(+id);
    return {
      message: 'Producto removed successfully',
    };
  }
}
