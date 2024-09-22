import Giscus from "@giscus/react";

const Comment=()=> {
  return (
    <Giscus
      id="comments"
      repo="sheriff-gaye/my_portfolio"
      repoId="R_kgDOKKX8-w"
      category="Announcements"
      categoryId="DIC_kwDOKKX8-84CiqD5"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
}

export default Comment