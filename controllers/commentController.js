import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";

// Create a new comment on a post
export const createComment = async (req, res) => {
    try {
        const { content, user, postId } = req.body;
        
        // Verify the post exists before creating comment
        const postExists = await Post.findById(postId);
        if (!postExists) {
            return res.status(404).json({ error: "Post not found. Cannot create comment." });
        }
        
        const newComment = await Comment.create({ content, user, postId });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve all comments from database
export const getAllComments = async (req, res) => {
    try {
        const allComments = await Comment.find().sort({ createdAt: -1 });
        res.status(200).json(allComments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all comments for a specific post
export const getCommentsByPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const postComments = await Comment.find({ postId: postId }).sort({ createdAt: -1 });
        res.status(200).json(postComments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all comments by a specific user
export const getCommentsByUser = async (req, res) => {
    try {
        const { user } = req.params;
        const userComments = await Comment.find({ user: user });
        res.status(200).json(userComments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single comment by ID
export const getCommentByID = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update an existing comment
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const updatedComment = await Comment.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );
        
        if (!updatedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id);
        
        if (!deleted) {
            return res.status(404).json({ error: "Comment not found" });
        }
        
        res.status(200).json({ 
            message: "Comment deleted successfully",
            deletedComment: deleted
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete all comments (use with caution)
export const deleteAllComments = async (req, res) => {
    try {
        const deleteResult = await Comment.deleteMany({});
        res.status(200).json({
            message: "All comments have been deleted",
            count: deleteResult.deletedCount
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};