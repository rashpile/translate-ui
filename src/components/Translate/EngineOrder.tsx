import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from "react";

type Props = {
    children?: React.ReactNode,
    onEngineUp: Function,
    engineOrder: string[]
  }
  
const EngineOrder = (props: Props) => {

    const [dense, setDense] = React.useState(true);
    // const[ order,setOrder ]= React.useState(props.engineOrder)

    let order = props.engineOrder;
    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    let items: React.ReactElement[] = [];

    function itemOrderUpHandler(event: React.MouseEvent<HTMLElement>) {
        console.log("itemHandler " + event.currentTarget.id)
        let newOrder = []
        for (let i = 0; i < order.length; i++) {
            if (i<order.length-1 && order[i+1] == event.currentTarget.id) {
                newOrder.push(order[i+1])
                newOrder.push(order[i])
                i++
            }else{
                newOrder.push(order[i])
            }
        }
        // setOrder(newOrder)
        props.onEngineUp(event.currentTarget.id)
    }

    items[0] = (<ListItem key={order[0]}
    >
        <ListItemAvatar>
            <Avatar>
                <ChatBubbleIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={order[0]}
        />
    </ListItem>);
    items[1] = (<ListItem key={order[1]}
        secondaryAction={
            <IconButton id={order[1]} edge="end" aria-label="delete" onClick={itemOrderUpHandler}>
                <ArrowUpwardIcon />
            </IconButton>
        }
    >
        <ListItemAvatar>
            <Avatar>
                <ChatBubbleIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={order[1]}
        />
    </ListItem>);

    function generate(element: React.ReactElement) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    return (
        <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Engine Order
            </Typography>
            <Demo>
                <List dense={dense}>
                {items}

                </List>
            </Demo>
        </Grid>
    )
}

export default EngineOrder