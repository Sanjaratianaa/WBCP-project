import { Injectable } from "@nestjs/common";
import { replicate } from "./replicate";

@Injectable()
export class ReplicateService{
 
    constructor(){

    }

    // latent-consistency-model, sdxl
    async genareImage(imagePrompt: string){
        const output = await replicate.run(
        "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
            {
                input: imagePrompt  
            }
        );
        console.log("it work")
        console.log(output);
    }

    //llama-2-70b-chat
    async answerQuestion(question: string){
        const q = question["question"];
        let retour = "";
        const input = {
            top_k: 0,
            top_p: 1,
            prompt: q,
            temperature: 0.75,
            system_prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
            length_penalty: 1,
            max_new_tokens: 800,
            prompt_template: "<s>[INST] <<SYS>>\n{system_prompt}\n<</SYS>>\n\n{prompt} [/INST]",
            presence_penalty: 0
        };
        
        for await (const event of replicate.stream("meta/llama-2-7b-chat", { input })) {
            retour += event.toString();
        };
        return retour;
    }

    //musicgen
    async generateMusic(prompt: string){
        const p = prompt["prompt"]
        console.log(prompt)
        const output = await replicate.run(
            "meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
            {
                input: {
                top_k: 250,
                top_p: 0,
                prompt: p,
                duration: 8,
                temperature: 1,
                continuation: false,
                model_version: "stereo-large",
                output_format: "mp3",
                continuation_start: 0,
                multi_band_diffusion: false,
                normalization_strategy: "peak",
                classifier_free_guidance: 3
              }
            }
          );
        console.log(output);
    }

    // styletts2
    async textToSond(prompt: string){
        const q = prompt["prompt"];
        const output = await replicate.run(
        "adirik/styletts2:989cb5ea6d2401314eb30685740cb9f6fd1c9001b8940659b406f952837ab5ac",
            {
                input: {
                beta: 0.7,
                seed: 0,
                text: q,
                alpha: 0.3,
                diffusion_steps: 10,
                embedding_scale: 1.5
                }
            }
        );
        console.log(output);
    }
    
    //sdxl-emoji
    async textToImageCartoon(prompt: string){
        const q = prompt["prompt"];
        const output = await replicate.run(
        "fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
        {
            input: {
            width: 1024,
            height: 1024,
            prompt: q,
            refine: "no_refiner",
            scheduler: "K_EULER",
            lora_scale: 0.6,
            num_outputs: 1,
            guidance_scale: 7.5,
            apply_watermark: false,
            high_noise_frac: 0.8,
            negative_prompt: "",
            prompt_strength: 0.8,
            num_inference_steps: 50
            }
        }
        );
        console.log(output);
    }

    textToVideo(prompt: string){}

    //salesforce/blip
    async imageDescription(prompt: string, question: string, imageUrl: string, caption: string){
        const output = await replicate.run(
        "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
        {
            input: {
                task: "visual_question_answering",
                question: question,
                image: imageUrl,
                caption: caption
            }
        }
        );
        console.log(output);
    }
}