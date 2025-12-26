import Post from '../models/postModel.js';

// Create a new post
export const addPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all posts or filter by sender
export const getAllPosts_senderId = async (req, res) => {
    try {
        const { sender } = req.query;
        
        if (sender) {
            const filteredPosts = await Post.find({ sender: sender });
            if (filteredPosts.length === 0) {
                return res.status(404).json({ error: 'No posts found for this sender' });
            }
            return res.status(200).json(filteredPosts);
        }
        
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single post by ID
export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};