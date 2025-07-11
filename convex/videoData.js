import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const CreateNewVideoData = mutation({
    args: {
        uid: v.id('users'),
        topic: v.string(),
        language: v.string(),
        scriptVariant: v.any()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert('videoData', {
            uid: args.uid,
            topic: args.topic,
            language: args.language,
            scriptVariant: args.scriptVariant,
        })
    
        return result
    }
})



export const GetVideoDataById = query({
    args: {
        vid: v.id('videoData')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.get(args.vid);
        return result;
    }
})