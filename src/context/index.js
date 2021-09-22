/* eslint-disable no-case-declarations */
import React, { useReducer } from "react";
import PropTypes from "prop-types";
// // import { gqlClient } from "services/graphql";
// import { GET_RECIPES, GET_RECIPE } from "graphql/recipes";
import {
  SET_RECIPES,
  SET_EDITING,
  SET_EDITING_RECIPE,
  SET_SELECTED_RECIPE,
  SET_DELETE_MODAL,
} from "../actions";

const initialState = {
  recipes: [
    {
      id: 0,
      name: "Pasta 1",
      imageUrl: "abc",
      method: "testing",
      ingredients: [
        {
          measurement: "100",
          unit: "grams",
          name: "spaghetti",
        },
      ],
    },
    {
      id: 1,
      name: "Pasta 2",
      imageUrl: "zzz",
      method: "sss",
      ingredients: [
        {
          measurement: "100",
          unit: "grams",
          name: "spaghetti",
        },
        {
          measurement: "100",
          unit: "ml",
          name: "cream",
        },
      ],
    },
  ],
  editing: false,
  editingRecipe: false,
  selectedRecipe: { title: "", description: "" },
  deleteModal: false,
};

const GlobalContext = React.createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, recipes: action.recipes };
    case SET_EDITING:
      return { ...state, editing: action.editing };
    case SET_EDITING_RECIPE:
      return { ...state, editingRecipe: action.editingRecipe };
    case SET_SELECTED_RECIPE:
      return { ...state, selectedRecipe: action.selectedRecipe };
    case SET_DELETE_MODAL:
      return { ...state, deleteModal: action.deleteModal };
    default:
      return state;
  }
};

// async function getData(dispatch) {
//   let result = null;
//   result = await gqlClient.query(GET_RECIPES);
//   dispatch({ type: "SET_RECIPES", recipes: result.items });
//   return result.items;
// }

// async function getRecipe(dispatch, recipeId) {
//   let result = null;
//   result = await gqlClient.query(GET_RECIPE(recipeId));
//   dispatch({ type: "SET_SELECTED_RECIPE", selectedRecipe: result.item });
//   return result.items;
// }

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalContext, GlobalProvider };

// export { GlobalContext, GlobalProvider, getData, getRecipe };