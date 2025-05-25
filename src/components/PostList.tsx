import React from 'react';
import { Post, Participant } from '../types';
import GlassCard from './GlassCard';

interface PostListProps {
  posts: Post[];
  participants: Participant[];
}

const PostList: React.FC<PostListProps> = ({ posts, participants }) => {
  // Sort posts by timestamp (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  const getAuthor = (authorId: number) => {
    return participants.find(p => p.id === authorId);
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-white mb-4">Aktuelle Beiträge</h3>
      {sortedPosts.length === 0 ? (
        <p className="text-white/70 text-center py-8">Noch keine Beiträge vorhanden.</p>
      ) : (
        <div className="space-y-4">
          {sortedPosts.map(post => {
            const author = getAuthor(post.authorId);
            return (
              <div key={post.id} className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  {author && (
                    <>
                      <img 
                        src={author.avatar} 
                        alt={author.name} 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="text-white font-medium">{author.name}</h4>
                        <p className="text-white/60 text-xs">{author.role} • {formatDate(post.timestamp)}</p>
                      </div>
                    </>
                  )}
                </div>
                <p className="text-white/90">{post.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </GlassCard>
  );
};

export default PostList;