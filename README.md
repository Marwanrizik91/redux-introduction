# Redux

![](./assets/redux.png)

## The bank example

### Constants
```javascript
const DEPOSIT_MONEY = 'DEPOSIT_MONEY'
const WITHDRAW_MONEY = 'WITHDRAW_MONEY'
```

### Actions
```javascript
{
    type: DEPOSIT_MONEY,
    payload: {
        amount: 100
    }
}
```

### Action creators
```javascript
function deposit (amount) {
    return {
        type: DEPOSIT_MONEY,
        payload: {
            amount
        }
    }
}
```

### Dispatch an action
```javascript
const dispatch = useDispatch()

dispatch(deposit(2000))
```


### Reducer
```javascript
function bankReducer(currentState = initialState, action) {
    switch (action.type) {
        case WITHDRAW_MONEY:
            const newState = { 
                ...currentState, 
                balance: currentState.balance - action.payload.amount
            }
            return newState

        case DEPOSIT_MONEY:
            const newState = { 
                ...currentState, 
                balance: currentState.balance + action.payload.amount
            }
            return newState;

        default:
            return currentState
    }
}
```

### Store, 1 Reducer 1 key of the state
```javascript
const store = combineReducers({
    bankState: bankReducer,
    todosState: todosReducer
})

// to get the balance we do
const balance = useSelector(state => state.bankState.balance)
```
