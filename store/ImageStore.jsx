import {types, flow, onSnapshot, getSnapshot} from "mobx-state-tree";

// Define the ImageStore model
const ImageStore = types
  .model({
    id: types.number,
    // Track current image index instead of page
    currentIndex: types.number,

    // Total number of ids is 20
    totalIds: types.number,

    // URL of current image
    imageUrl: types.string,

    //loading image for loader
    loadImage: types.boolean,
  })

  // Add actions to the model
  .actions((self) => ({
    // Action to fetch a random image
    fetchRandomImage: flow(function* () {
      // Set a random index between 0 and 19
      self.currentIndex = Math.floor(Math.random() * 20);

      self.id = self.currentIndex + 1;

      try {
        //to check the loader state
        self.loadImage = true;
        // Make an API request
        const response = yield fetch(
          `https://rickandmortyapi.com/api/character/${self.id}`
        );
        // Parse the response
        const data = yield response.json();
        // Update the imageUrl property
        self.imageUrl = data.image;
      } catch (error) {
        console.log(error);
      }

      self.loadImage = false;
    }),

    // Action to move to the next image
    nextImage: flow(function* () {
      // Increment the index, looping back to the start if necessary
      self.currentIndex = (self.currentIndex + 1) % 20;

      self.loadImage = true;
      // Trigger the fetchRandomImage action
      yield self.fetchRandomImage();
      self.loadImage = false;
    }),

    // Action to move to the previous image
    prevImage: flow(function* () {
      // Decrement the index, looping back to the end if necessary
      self.currentIndex = (self.currentIndex - 1 + 20) % 20;

      self.loadImage = true;
      // Trigger the fetchRandomImage action
      yield self.fetchRandomImage();
      self.loadImage = false;
    }),
  }));

// Initialize store
const imageStore = ImageStore.create({
  currentIndex: 0,
  totalIds: 20,
  id: 1,
  imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  loadImage: false,
});

// console.log(getSnapshot(imageStore))
// Export store
export default imageStore;
