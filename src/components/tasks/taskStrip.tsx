import React from "react";
import strip_style from "./taskStrip.module.sass";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

function Strip(props: any) {
  const handleExtend = (e: React.MouseEvent) => {
    let content = e.currentTarget.nextElementSibling as HTMLDivElement;
    let arrow = document.getElementsByClassName("arrow")[0] as HTMLSpanElement;
    arrow.style.rotate = "45deg";
    console.log(content.style);
    if (content.style.height === "300px") {
      content.style.height = "0px";
      content.style.paddingBottom = "0px";
    } else {
      content.style.height = "300px";
      content.style.paddingBottom = "20px";
    }
  };

  //   let coll = (document.getElementsByClassName(
  //     strip_style["strip-body"]
  //   ) as any) as Array<HTMLDivElement>;
  //   for (let i = 0; i < coll.length; i++) {
  //     coll[i].addEventListener("click", (e) => {
  //       console.log("dslkjflksj");
  //       coll[i].classList.toggle("active");
  //       var content = coll[i].nextElementSibling as HTMLDivElement;
  //       console.log(content.style.width);
  //       if (content.style.width == "100px") {
  //         content.style.height = "0";
  //       } else {
  //         content.style.height = "100px";
  //       }
  //     });
  //   }

  //   coll.forEach((coll) => {

  //   });

  return (
    <div>
      <div onClick={handleExtend} className={strip_style["strip-body"]}>
        {props.due ? (
          <span className={`material-icons ${strip_style["clock"]}`}>
            query_builder
          </span>
        ) : (
          <span className={`material-icons ${strip_style["not-set"]}`}>
            not_started
          </span>
        )}

        <p className={strip_style["task-name"]}>{props.name}</p>

        <div>Assignees: {props.no_assignees}</div>

        <span
          id={props.name}
          className={`material-icons arrow ${strip_style["arrow"]}`}
        >
          arrow_drop_down
        </span>
      </div>
      <div className={strip_style["content"]}>
        {/* <div className={strip_style["starts"]}> {props.starts}</div>
        {props.due ? (
          <div className={strip_style["ends"]}>
            {props.due !== "0 minutes" ? `Ends In: ${props.due}` : "Expired"}
          </div>
        ) : (
          <div>Due date not set</div>
        )} */}
        <h3 className={strip_style["detailed-name"]}>{props.name}</h3>
        <div>
          <div>
            <img src="https://img.icons8.com/android/24/000000/markdown.png" />
          </div>
          Description:
          <div className={strip_style["description"]}>
            <ReactMarkdown
              children={props.description}
              plugins={[]}
            ></ReactMarkdown>
            {/* {props.description} */}
          </div>
          <div>
            {props?.assignees?.map((assignee: Array<any>) => {
              return <div>{assignee}</div>;
            })}
          </div>
          <div>Starts: {props.starts}</div>
          <div>Ends: {props.due === "0 minutes" ? "Expired" : props.due}</div>
        </div>
      </div>
    </div>
  );
}

export default Strip;
