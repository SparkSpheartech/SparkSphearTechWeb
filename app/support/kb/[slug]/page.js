"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { kbArticles } from '@/data/kbArticles';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function KBArticle() {
    const params = useParams();
    const article = kbArticles.find((a) => a.slug === params.slug);

    if (!article) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                    <section className="pt-32 pb-20">
                        <div className="container text-center">
                            <h1 className="text-white text-4xl font-bold mb-6">Article Not Found</h1>
                            <Link href="/support/kb" className="text-primary hover:underline">
                                Back to Knowledge Base
                            </Link>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                <section className="pt-32 pb-20">
                    <div className="container max-w-4xl">
                        <Link href="/support/kb" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Knowledge Base
                        </Link>

                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-10 h-10 text-primary" />
                            <div>
                                <span className="text-primary text-sm font-semibold">{article.category}</span>
                                <h1 className="text-white text-3xl md:text-4xl font-bold">{article.title}</h1>
                            </div>
                        </div>

                        <div className="text-gray-400 mb-8">
                            <p>{article.readTime} read • Last updated {article.updated}</p>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <div className="text-gray-300 leading-relaxed space-y-6">
                                {article.content.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-dark-2">
                            <Link
                                href="/support/kb"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                            >
                                Back to All Articles
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
