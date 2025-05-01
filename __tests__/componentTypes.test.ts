import { ComponentMetadataSchema } from '../src/types/componentTypes';

test('validates correct metadata', () => {
  const validMetadata = {
    title: "Button",
    description: "A simple button component",
    author: "Team",
    keywords: ["button", "ui"],
    embed: {
      color: "#ffffff",
      image: "button.png",
    },
  };

  expect(() => ComponentMetadataSchema.parse(validMetadata)).not.toThrow();
});

test('throws error for invalid metadata', () => {
  const invalidMetadata = {
    title: "Button",
    embed: {
      color: "#ffffff",
    },
  };

  expect(() => ComponentMetadataSchema.parse(invalidMetadata)).toThrow();
});