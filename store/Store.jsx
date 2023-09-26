// Import types from MST to define the model structure
import { types} from "mobx-state-tree";

// Define the Store model
const Store = types
  .model({
    // Define likesCount property as a number
    likesCount: types.number,
    // Define comments property as an array of strings
    comments: types.array(types.string),
  })

  // Define actions on the model
  .actions((self) => ({
    // Action to increment likesCount
    updateCount() {
      self.likesCount++;
    },

    // Action to add a comment
    postComment(comment) {
      self.comments.push(comment);
    },
  }))

  // Define views (computed properties) on the model
  .views((self) => ({
    // View to return comments length
    get commentsCount() {
      return self.comments.length;
    },
  }));

// Create an instance of the Store model
const store = Store.create({
  // Initial property values
  likesCount: 12,
  comments: ["Wow", "awesome"],
});
// console.log(getSnapshot(store))
// Export the store instance
export default store;
