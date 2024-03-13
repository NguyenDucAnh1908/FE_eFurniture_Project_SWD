import { createContext, useContext, useReducer } from 'react';

const FeedbackContext = createContext();

const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REPLY':
      return {
        ...state,
        feedbacks: state.feedbacks.map((feedback) =>
          feedback.id === action.payload.id
            ? { ...feedback, reply: action.payload.reply }
            : feedback
        ),
      };
    default:
      return state;
  }
};

export const FeedbackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(feedbackReducer, { feedbacks: [] });

  return (
    <FeedbackContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};
