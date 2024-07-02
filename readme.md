# CV Builder Project

## Project Overview

This project was my first adventure with React after some time re-studying vanillaJS. It's a project suggested by the JS Path from The Odin Project. It's goal was to create a dynamic CV builder. This has provided me valuable insights into React's Props, State, and component architecture.

## Key Features and Implementation

### State Management and Lifting State Up

- **Props and State:** Utilized Props for passing data and State for managing component-specific data.
- **Lifting State Up:** Centralized state management by lifting state to a common ancestor.

### Conditional Rendering and Form Handling

- **Conditional Rendering:** Managed conditional rendering using State to display different content based on user actions.
- **Form Handling:** Stored form values in both objects and arrays of objects, alongside handling them in immutable fashion to maintain React's re-rendering capability.

### Component Optimization and Architectural Implementation

- **Component Tables:** Used a table to reference different components, reducing repetitive code. Each panel (Personal, Education, Work) rendered forms with different inputs based on a Component Table object.
- **Architectural Considerations:** Exported default fields from its respective "inputs component" to keep a single source of truth of available options.

## Lessons Learned and Future Improvements

- **Understanding State and Props:** Solidified my understanding of data flow and interactions in React.
- **Architectural Insights:** Highlighted the importance of a well-thought-out architecture for managing complexity and enhancing code reusability.
- **Aim for bottom-up thinking:** Future focus on identifying reusable components early to create a more modular project.

## Deploy

This is project is available at [Vercel](https://odin-cv-pink.vercel.app/)
