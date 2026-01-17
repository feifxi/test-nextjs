'use client'

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Avatar,
  Box,
  Stack,
} from "@mui/material";

const initialPosts = [
  {
    id: 1,
    author: "Alice",
    handle: "@alice",
    content: "Hello world! This is my first post 👋",
  },
  {
    id: 2,
    author: "Bob",
    handle: "@bob",
    content: "React + MUI makes UI development so fast 🚀",
  },
];

export default function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!text.trim()) return;
    setPosts([
      {
        id: Date.now(),
        author: "You",
        handle: "@you",
        content: text,
      },
      ...posts,
    ]);
    setText("");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Mini Twitter
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 3 }}>
        {/* Create Post */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Avatar>Y</Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  placeholder="What's happening?"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  variant="standard"
                />
                <Box sx={{ textAlign: "right", mt: 1 }}>
                  <Button variant="contained" onClick={handlePost}>
                    Post
                  </Button>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* Feed */}
        <Stack spacing={2}>
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar>{post.author[0]}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {post.author} <Typography component="span" color="text.secondary">{post.handle}</Typography>
                    </Typography>
                    <Typography variant="body1">{post.content}</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
