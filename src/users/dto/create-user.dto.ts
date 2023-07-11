import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.com', description: 'Email user address' })
    readonly email: string;
    @ApiProperty({ example: '12345678', description: 'User password' })
    readonly password: string;
}
