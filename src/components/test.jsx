handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    // state의 값을 직접적으로 수정하면 안되기 때문에, 새로운 배열을 만든다. 기존에 있는 배열안에 있는 아이템들을 복사해 온다.
    const index = habits.indexOf(habit);
    //그 새로운 배열에서 몇 번쨰로 이벤트로 들어온지를 객체에서 찾는다.
    habits[index].count++;
    //새로운배열의 이벤트로 들어온 객체에 들어있는 카운트 값에 플러스를 해준다.
    this.setState({ habits: habits });
    // 키값이 habits라는 새로운 객체에 로컬변수 habits 라는 새로운 배열을 담는 객채를 만들어 준다.
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    // habits[index].count--;
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    //>>> splice() api를 이용한 방법
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index);
    // this.setState({ habits });

    //>>> filter api를 이용한 방법
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    // 인자로 들어온 id 값과 habit으로 들어온 id값이 일치하지 않는 요소들만 가지고 새로운 배열을 만들어준다.
    this.setState({ habits });
  };