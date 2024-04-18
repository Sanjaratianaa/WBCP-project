import { Body, Controller, Post } from "@nestjs/common";
import { ReplicateService } from "./replicate.service";

@Controller('ia-helper')
export class ReplicateController {
    constructor(private readonly replicateService: ReplicateService) {}

    @Post('generate-image')
    genareImage(@Body() prompt: string){
        this.replicateService.genareImage(prompt);
    }

    @Post('answer-question')
    answerQuestion(@Body() question: string){
        return this.replicateService.answerQuestion(question);
    }

    @Post('generate-music')
    generateMusic(@Body() prompt: string){
       this.replicateService.generateMusic(prompt);
    }

    @Post('text-to-sond')
    textToSond(@Body() prompt: string){
        this.replicateService.textToSond(prompt);
    }
    
    @Post('text-to-image-cartoon')
    textToImageCartoon(@Body() prompt: string){
        this.replicateService.textToImageCartoon(prompt);
    }


    textToVideo(prompt: string){}

    //salesforce/blip
    async imageDescription(@Body() prompt: string,@Body() question: string,@Body() imageUrl: string,@Body() caption: string){
        
    }   
}