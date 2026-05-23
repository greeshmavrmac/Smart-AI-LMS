import React, {
  useState,
  useRef,
  useEffect,
} from "react";

const Dashboard = () => {
  const [videoUrl, setVideoUrl] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [chat, setChat] =
    useState([
      {
        sender: "ai",
        text:
          "Hi 👋 I am your AI Assistant. Ask me for course recommendations or doubts.",
      },
    ]);

  const [loading, setLoading] =
    useState(false);

  const chatEndRef =
    useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }, [chat, loading]);

  // YouTube Embed
  const getEmbedUrl = (
    url
  ) => {
    if (!url) return "";

    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;

    const match =
      url.match(regExp);

    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }

    return "";
  };

  // AI Send Message
  const handleSend =
    async () => {
      if (
        !message.trim()
      )
        return;

      const userMessage =
        message;

      const updatedChat = [
        ...chat,
        {
          sender: "user",
          text:
            userMessage,
        },
      ];

      setChat(updatedChat);

      setMessage("");

      setLoading(true);

      try {
        const response =
          await fetch(
            "https://smart-ai-lms.onrender.com/api/ai/ask",
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify(
                  {
                    message:
                      userMessage,

                    history:
                      updatedChat,
                  }
                ),
            }
          );

        const data =
          await response.json();

        setChat(
          (prev) => [
            ...prev,
            {
              sender:
                "ai",

              text:
                data.reply ||
                data.answer ||
                "No response from AI",
            },
          ]
        );
      } catch (
        error
      ) {
        console.log(
          error
        );

        setChat(
          (prev) => [
            ...prev,
            {
              sender:
                "ai",

              text:
                "AI server not connected ❌",
            },
          ]
        );
      }

      setLoading(false);
    };

  return (
    <div
      style={{
        minHeight:
          "100vh",

        background:
          "#f4f6f9",

        padding:
          "30px",
      }}
    >
      <h1>
        Dashboard
      </h1>

      <div
        style={{
          display:
            "flex",

          gap:
            "20px",

          flexWrap:
            "wrap",
        }}
      >
        {/* Video Section */}
        <div
          style={{
            flex: 2,

            background:
              "#fff",

            padding:
              "25px",

            borderRadius:
              "15px",
          }}
        >
          <h2>
            Add Course Video 🎥
          </h2>

          <input
            type="text"
            placeholder="Paste YouTube Link..."
            value={
              videoUrl
            }
            onChange={(
              e
            ) =>
              setVideoUrl(
                e.target
                  .value
              )
            }
            style={{
              width:
                "100%",

              padding:
                "14px",

              marginBottom:
                "20px",
            }}
          />

          {videoUrl && (
            <iframe
              width="100%"
              height="420"
              src={getEmbedUrl(
                videoUrl
              )}
              title="Course Video"
              allowFullScreen
            />
          )}
        </div>

        {/* AI Chat */}
        <div
          style={{
            flex: 1,

            background:
              "#fff",

            padding:
              "20px",

            borderRadius:
              "15px",

            height:
              "600px",

            display:
              "flex",

            flexDirection:
              "column",
          }}
        >
          <h2>
            AI Assistant 🤖
          </h2>

          {/* Chat */}
          <div
            style={{
              flex: 1,

              overflowY:
                "auto",

              marginTop:
                "15px",
            }}
          >
            {chat.map(
              (
                msg,
                index
              ) => (
                <div
                  key={index}
                  style={{
                    display:
                      "flex",

                    justifyContent:
                      msg.sender ===
                      "user"
                        ? "flex-end"
                        : "flex-start",

                    marginBottom:
                      "12px",
                  }}
                >
                  <div
                    style={{
                      background:
                        msg.sender ===
                        "user"
                          ? "#2563eb"
                          : "#e5e7eb",

                      color:
                        msg.sender ===
                        "user"
                          ? "#fff"
                          : "#000",

                      padding:
                        "10px 14px",

                      borderRadius:
                        "12px",

                      maxWidth:
                        "80%",

                      lineHeight:
                        "1.8",

                      position:
                        "relative",
                    }}
                  >
                    {msg.sender ===
                      "ai" && (
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            msg.text
                          )
                        }
                        style={{
                          position:
                            "absolute",

                          top:
                            "10px",

                          right:
                            "10px",

                          background:
                            "#2563eb",

                          color:
                            "#fff",

                          border:
                            "none",

                          padding:
                            "6px 10px",

                          borderRadius:
                            "6px",

                          cursor:
                            "pointer",

                          fontSize:
                            "12px",
                        }}
                      >
                        Copy
                      </button>
                    )}

                    <pre
                      style={{
                        whiteSpace:
                          "pre-wrap",

                        lineHeight:
                          "1.9",

                        fontSize:
                          "15px",

                        wordBreak:
                          "break-word",

                        margin:
                          0,

                        fontFamily:
                          "Arial, sans-serif",
                      }}
                    >
                      {msg.text}
                    </pre>
                  </div>
                </div>
              )
            )}

            {loading && (
              <div
                style={{
                  display:
                    "flex",

                  justifyContent:
                    "flex-start",

                  marginBottom:
                    "12px",
                }}
              >
                <div
                  style={{
                    background:
                      "#e5e7eb",

                    padding:
                      "10px 14px",

                    borderRadius:
                      "12px",
                  }}
                >
                  AI is typing...
                </div>
              </div>
            )}

            <div
              ref={
                chatEndRef
              }
            />
          </div>

          {/* Input */}
          <div
            style={{
              display:
                "flex",

              gap:
                "10px",
            }}
          >
            <input
              type="text"
              placeholder="Ask AI..."
              value={
                message
              }
              onChange={(
                e
              ) =>
                setMessage(
                  e.target
                    .value
                )
              }
              onKeyDown={(
                e
              ) => {
                if (
                  e.key ===
                  "Enter"
                ) {
                  handleSend();
                }
              }}
              style={{
                flex: 1,
                padding:
                  "12px",
              }}
            />

            <button
              onClick={
                handleSend
              }
              style={{
                background:
                  "#2563eb",

                color:
                  "#fff",

                border:
                  "none",

                padding:
                  "12px 18px",

                cursor:
                  "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;