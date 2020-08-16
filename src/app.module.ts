import { Module } from '@nestjs/common'
import { AppController } from './App.controller'
import { AppService } from './App.service'
import { ConsoleModule } from 'nestjs-console'
import { ApicontrollerController } from './Apicontroller/Apicontroller.controller';
import { ApiControllerController } from './ApiController/ApiController.controller';

@Module({
	imports: [
		// https://github.com/Pop-Code/nestjs-console#how-to-use-decorators
		// Allows adding console functions
		ConsoleModule
	],
	controllers: [AppController, ApicontrollerController, ApiControllerController],
	providers: [AppService]
})
export class AppModule {}
