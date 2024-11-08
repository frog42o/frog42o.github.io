import { ReactNode } from "react";
import { useEffect, useState,FormEvent } from "react";

interface CustomizeAIProps {
    onSend: (input: string) => Promise<void>; //nothing is returned after its resolved
  }
  function CustomizeAI({ onSend }: CustomizeAIProps) {
    const [input, setInput] = useState<string>("");

    const components = ['TitlePage', 'AboutMe', 'MenuBar', 'SocialMedia', 'WebsiteEnd','Projects']
    const properties = ['backgroundColor', 'fontSize', 'text']
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      const componentsList = components.map((comp) => `[${comp}]`).join(', ');
      const propertiesList = properties.map((prop) => `[${prop}]`).join(', ');

      if (input.trim()) { 
        const messageWithContext = `Provide instructions in the following EXACT format: 
        1. Change [component] [property] to [value]. 
        From the available options, based on the input select ONE of the choices as your response. (Keep only properties camelCased).
        Available components: ${componentsList}
        Available properties: ${propertiesList}
        
        Here is the input: ${input}`;
        await onSend(messageWithContext); 
        setInput(""); 
      }
    };
  
    return (<div>
      <div id = "customizeai">
        <form onSubmit={handleSubmit}>
        <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="begin typing here..."
            rows={4} 
            cols={10}
            style={{ width: '100%', resize: 'both' }} 
        />
        
        <button type="submit">submit</button>
        <p>you can customize this website powered by openai!<br></br>-change style such as fonts & color!
        <br></br>-change texts<br></br>-add new components(coming soon)</p> 
    </form>
        </div>
    </div>);
}

export default CustomizeAI;