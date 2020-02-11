// CONTADOR

// reducers
function contador(state = 0, action) {
    switch (action.type) {
        case 'INCREMENTO':
            return state + 1;
        case 'DECREMENTO':
            return state - 1;
        case 'ZERAR_CONTADOR':
            return 0;
    }
    return state;
}

// criar store
let store = Redux.createStore(contador);

// recuperar estado
document.write(store.getState());

//
store.dispatch({ type: 'INCREMENTO' });
store.dispatch({ type: 'INCREMENTO' });
store.dispatch({ type: 'INCREMENTO' });

document.write(store.getState());

//
store.dispatch({ type: 'DECREMENTO' });

document.write(store.getState());

//
store.dispatch({ type: 'ZERAR_CONTADOR' });

document.write(store.getState());

