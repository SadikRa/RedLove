/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CommunityPageStyle = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      name: "Ayesha Rahman",
      message:
        "Donating blood was the best feeling of my life. I know it saved someone in need.",
    },
    {
      id: 2,
      name: "Karim Hossain",
      message:
        "My father received blood during surgery — thank you to all donors!",
    },
  ]);

  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.message) return;
    setStories([{ id: stories.length + 1, ...form }, ...stories]);
    setForm({ name: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-red-50 dark:bg-gray-900 py-10">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-600">RedLove Community</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Share your blood donation journey, inspire others, and connect with
          life-savers.
        </p>
      </div>

      {/* Share Your Story */}
      <div className="max-w-2xl mx-auto mt-8 px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Share Your Story ❤️</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Textarea
              placeholder="Write your story..."
              value={form.message}
              onChange={(e: { target: { value: any } }) =>
                setForm({ ...form, message: e.target.value })
              }
            />
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={handleSubmit}
            >
              Post Story
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Stories List */}
      <div className="max-w-3xl mx-auto mt-8 px-4 space-y-4">
        {stories.map((story) => (
          <Card key={story.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-red-600">
                {story.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              {story.message}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityPageStyle;
