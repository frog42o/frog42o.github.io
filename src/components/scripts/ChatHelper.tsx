import axios from "axios";

interface EditableFunctions {
  // Add specific functions
  updateStyle: (component: string, style: React.CSSProperties) => void;
  updateContent: (component: string, content: string) => void;
}


async function handleUserCommand(message: string,{ updateStyle, updateContent }: EditableFunctions): Promise<void> {
  try {
    console.log(message);

    const response = await axios.post(
      "https://website-portfolio-backend.herokuapp.com/api/openai/generate",
      {
        prompt: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.data;

    console.log("a response has been generated! please view this message: " + data);
    if (data) {
        applyChanges(data, updateStyle, updateContent);
    }
  } catch (error) {
    console.error("Error with ChatGPT API:", error);
  }
}

  type ComponentType = 'TitlePage' | 'AboutMe' | 'Projects'; // Extend this as needed
  type PropertyType = 'text' | 'backgroundColor' | 'fontSize'; // Extend this as needed

  interface Command {
    component: ComponentType;
    property: PropertyType;
    value: string;
  }
  function camelToKebab(property: string): string {
    return property.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
  }
  
  function normalize(property: PropertyType): string {
    const propertyMap: { [key in PropertyType]: keyof React.CSSProperties } = {
      text: 'content', 
      backgroundColor: 'backgroundColor', 
      fontSize: 'fontSize',
    };
  
    const camelCaseProperty = propertyMap[property];
    
    return camelToKebab(camelCaseProperty);
  }
  function validateAndSanitizeValue(property: string, value: string): string | null {
    value = value.trim();
    value = value.replace(/\.+$/, '');
    
    if (property === 'fontSize' || property === 'margin' || property === 'padding') {
      if (/^\d+$/.test(value)) {
        value += 'px';
      }
      if (/^\d+(px|em|rem|%)$/.test(value)) {
        return value;
      }
    } else if (property === 'color' || property === 'backgroundColor') {
      if (/^#[0-9A-Fa-f]{6}$/.test(value) || 
          /^rgb\((\d{1,3},\s*){2}\d{1,3}\)$/.test(value) || 
          /^[a-zA-Z]+$/.test(value)) {
        return value;
      }
    }
  
    return null;
  }
  
  
  function applyChanges(
    chatResponse: string,
    updateStyle: (component: string, style: React.CSSProperties) => void,
    updateContent: (component: string, content: string) => void
  ): void {

    const chatArr = chatResponse.split(" ");
    console.log(chatArr);

    if (chatArr.length < 6) {
      console.error("Invalid command format");
      return;
    }


    const component: ComponentType = chatArr[2] as ComponentType;
    const property: PropertyType = chatArr[3] as PropertyType;
    const value: string = chatArr.slice(5).join(" "); 
  
    const command: Command = {
      component,
      property,
      value
    };
    const normalizedProperty =normalize(property);
    const sanitizedValue = validateAndSanitizeValue(property, value);
    if (command.property === 'text') {
      updateContent(command.component, command.value);
    } 
    else if (command.property === 'backgroundColor' || command.property === 'fontSize') {

      updateStyle(command.component, { [normalizedProperty]: sanitizedValue });
    }


    
  }
  
export default handleUserCommand;